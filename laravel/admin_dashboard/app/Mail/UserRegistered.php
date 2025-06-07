<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UserRegistered extends Mailable
{
    use SerializesModels;

    protected $user;

    // Pass the user to the mailable class
    public function __construct($user)
    {
        $this->user = $user;
    }

    public function build()
    {
        return $this->from(config('mail.from.address'))
                    ->subject('Welcome to Ecommerce Laravel')
                    ->view('emails.user_registered')
                    ->with([
                        'name' => $this->user->name,
                    ]);
    }
}
