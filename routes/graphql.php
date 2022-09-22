<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/guest', 'GuestController@graphql')
    ->name('graphql.guest.get');

Route::post('/guest', 'GuestController@graphql')
    ->name('graphql.guest.post');
