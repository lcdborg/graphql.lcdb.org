<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/base', 'GuestController@graphql')
    ->name('graphql.guest.get');

Route::post('/base', 'GuestController@graphql')
    ->name('graphql.guest.post');
