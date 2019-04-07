<?php
/**
 * Created by PhpStorm.
 * User: marisia
 * Date: 2/18/19
 * Time: 5:25 PM
 */
require __DIR__.'/vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as Capsule;
use Carbon\Carbon;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class Contact
{

    protected $fillable = ['email', 'message', 'ip_address', 'possible_spam', 'created_at'];

    public function __construct(){

        date_default_timezone_set('America/New_York');

        $this->possible_spam_fields = [
            'email_address',
            'name',
            'message',
        ];

        $mail = new PHPMailer(true);  // Passing `true` enables exceptions
        //Server settings
        $mail->SMTPDebug = 2;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = getenv('SMTP_SERVER');  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = getenv('SMTP_USER');                 // SMTP username
        $mail->Password = getenv('SMTP_PASSWORD');                            // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        //Recipients
        $mail->setFrom(getenv('SMTP_USER'), 'Contact Form');
        $mail->addAddress(getenv('SMTP_USER'), 'Joe User');     // Add a recipient


        //Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'Portfolio Web Contact';

        $this->mail = $mail;

    }


    public function process($request){

        $request['possible_spam'] = 0;

        $this->request_override = $request;

        if($this->checkPossibleSpam()){

            $this->spam_detected = true;
        }

        $this->saveDB();

//        if(!$this->spam_detected)
           echo $this->send();

    }


    public function send(){

        $content = "<table>";

            $content .= "<tr><td>Email</td><td>{$this->request_override['email']}</td></tr>";
            $content .= "<tr><td>Message</td><td>{$this->request_override['message']}</td></tr>";

        $content .= "<table>";


        try {

            $this->mail->Body    = $content;

            $this->mail->send();
            echo 'Message has been sent';

        } catch (Exception $e) {
            echo 'Message could not be sent. Mailer Error: ', $this->mail->ErrorInfo;
        }
    }

    public function saveDB(){

        $this->spam_detected = true;

        $this->request_override['created_at'] = Carbon::now()->format('Y-m-d H:i:s');

        $dataFill = array_map(function($d){

            if($d == 'possible_spam' && $this->spam_detected == true)
                return 1;

            return $this->request_override[$d];

        }, $this->fillable);

        $field_names = join(", ",$this->fillable);
        $escapeQuestion = join(", ", array_fill(0, count($this->fillable), " ? "));


        Capsule::insert("insert IGNORE into contacts ($field_names) values ($escapeQuestion)", $dataFill );

    }


    public function checkPossibleSpam(){


        //check same ip address more than 10 last 3 hours, mark as possible spam, dont send me email
        //at the end of the day i get a report of possible spam

        if($this->spamFieldsNotEmpty())
            return true;

        if($this->tooManyRequests())
            return true;

        return false;


    }

    private function spamFieldsNotEmpty(){

        foreach ($this->possible_spam_fields as $field){

            if(!empty($this->request_override[$field]))
                return true;
        }

        return false;

    }

    private function tooManyRequests(){

        //throttle hours
        $hours_past = Carbon::now()->subHour(3)->format('Y-m-d H:i:s');//2019-08-03 14:04:02

        $results = Capsule::select("SELECT count(*) as count FROM contacts where ip_address = ? AND created_at >= ?", [$this->request_override['ip_address'] , $hours_past]);

        if($results > 10)
            return true;

        return false;

    }

}








