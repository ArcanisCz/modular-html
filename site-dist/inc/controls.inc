<script type="text/javascript" src="js/datetimepicker.js"></script>
<script type="text/javascript" src="js/controls.js"></script>

<br>

<!-- Columns at 50% wide -->
<div class="row">

    <div class="col-lg-4 col-md-6 col-sm-12">
        <b>Čas:</b><br>
        <!-- Datetime picker -->
        <div class="input-group date" id="datetimepicker">
            <input type="text" class="form-control">
            <div class="input-group-addon">
                <div class="glyphicon glyphicon-calendar"></div>
            </div>
            <div class="input-group-btn" id="process-timestamp">
                <button type="button" class="btn btn-success">Zpracovat</button>
            </div>
        </div>
    </div>

    <div class="col-lg-2 col-md-6 col-sm-12">
        <b>Mapa:</b><br>
        <!--Dropdown select -->
        <div class="form-group" role="form">
            <select class="form-control" id="layer-select">
                <option value="Road">Vektorová (Bing)</option>
                <option value="AerialWithLabels">Hybridní (Bing)</option>
                <option value="Aerial">Satelitní (Bing)</option>
                <option value="road-ol" selected>Vektorová (OSM)</option>
            <!--<option value="sat-mapquest">Satelitní (MapQuest)</option>-->
            <!--<option value="google">Google</option>-->
            </select>
        </div>
    </div>

    <div class="col-lg-6 col-md-12 col-sm-12">
        <b>Pozice:</b><br>
        <div class="btn-group btn-group-justified" role="group">
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-primary" id="reset-position-main">D5</button>
            </div>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-primary" id="reset-position-BC">28&ndash;41</button>
            </div>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-primary" id="reset-position-CM">41&ndash;51</button>
            </div>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-primary" id="reset-position-ME">51&ndash;67</button>
            </div>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-primary" id="reset-position-EL">67&ndash;81</button>
            </div>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-primary" id="reset-position-42">K42</button>
            </div>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-primary" id="reset-position-54">K54</button>
            </div>
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-primary" id="reset-position-SSUD">SSÚD</button>
            </div>
        </div>
    </div>

    <!-- Add the extra clearfix for only the required viewport -->
    <div class="clearfix visible-xs-block"></div>

</div>

<div id="include-markers"></div>
