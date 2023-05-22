@include('partials.header')

<form method="post" action="/auth/login">
    @csrf
    <div class="container" style="background-color: white">
        <div class="row">
            <div class="col-12 h1">
                Login to continue
            </div>
        </div>
        <div class="row" style="margin-bottom: 5px;">
            <div class="col-12"><h3>{{ $error }}</h3></div>
        </div>
        <div class="row" style="margin-bottom: 5px;">
            <div class="col-1"><label for="username">Username</label></div>
            <div class="col-11"><input id="username" name="username" type="text"></div>
        </div>
        <div class="row" style="margin-bottom: 5px;">
            <div class="col-1"><label for="password">Password</label></div>
            <div class="col-11"><input id="password" name="password" type="password"></div>
        </div>
        <div class="row">
            <div class="col-12">
                <input type="submit">
                <a href="https://lcdb.org">cancel</a>
            </div>
        </div>
    </div>

</form>
@include('partials.footer')
