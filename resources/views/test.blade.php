@if (session()->has('shape'))
<p>
<img  src="{{ url('assets/img/shape')}}/{{ ucfirst(strtolower(session('shape'))) }}.png" width="25px">
<b>{{ session('rate') }}{{ session('currency_symbol') }}</b></p>
<a href="{{ url('/select') }}/{{ session('certificate_no') }}">view</a>|
<a href="{{ url('api/') }}">Change</a>
@endif
