@include('header');
                <div class="vdb-rb-filter-options-wrapper vdb_rb_natural_block">
                    <div class="vdb-rb-row">
                        <div class="vdb-rb-col-md-12 ">
                            <div class="vdb-rb-filter-options-block vdb-rb-shape-options">
                                <h5 class="vdb-rb-filter-options-title">
                                    Ring <span class="vdb-rb-filters-count">All</span>
                                </h5>
                            </div>
                        </div>
                        {{-- colour --}}
                        <div class="vdb-rb-col-md-6 ">
                            <div class="vdb-rb-filter-options-block">
                                <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                    </span><b>Metal</b></span>
                                    <br>

                                </div>
                                <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color"
                                    style="">
                                    <br>
                                    <br>
                                    {{-- @foreach($config->data->color as $color) --}}

                                    <h5 class="vdb-rb-filter-options-title"
                                        style="display: inline-block;margin:auto;float:right;">
                                        {{-- <p class="filter color_diamond" data-val="{{ $color }}" style="">{{ $color
                                            }}</p> --}}

                                    </h5>
                                    {{-- @endforeach --}}
                                </div>
                            </div>
                        </div>
                        {{-- end colour --}}
                        {{-- start clarity --}}

                        <div class="vdb-rb-col-md-6 ">
                            <div class="vdb-rb-filter-options-block">
                                <div class="vdb-rb-d-flex vdb-rb-justify-between">
                                    </span><b>Price</b></span>
                                    <br>
                                </div>
                                <div class="vdb-rb-filter-range-slider vdbrb_natural_color vdbrb_natural_white_color"
                                    style="">
                                    <br>
                                    <br>
                                    {{-- @foreach($config->data->clarity as $clarity) --}}
                                    <h5 class="vdb-rb-filter-options-title"
                                        style="display: inline-block;margin:auto;float:right;">
                                        {{-- <p class=" filter clarity_diamond" data-val="{{ $clarity }}"
                                            style="margin-left: 5px">{{ $clarity }}</p> --}}
                                    </h5>
                                    {{-- @endforeach --}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="card-deck" class="row">
                </div>
                <div class="auto-load  text-center">
                    <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="60" viewBox="0 0 100 100"
                        enable-background="new 0 0 0 0" xml:space="preserve">
                        <path fill="#000"
                            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                            <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s"
                                from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    </main>
</div>
</div>
<script>
    $(document).ready(function() {
            $(".down-button").click(function(){
                    $(".hide-filter").toggle();
              });
              });
</script>

</body>

</html>
