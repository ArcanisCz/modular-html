<script type="text/javascript" src="js/datetimepicker.js"></script>

<div class="col-lg-1 col-md-4 col-sm-6 col-xs-12">
    <div class="form-group" role="form">
        <label class="control-label">Vypsat:</label><br>
        <input type="text" class="form-control" id="event-length" value="30">
    </div>
</div>

<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <label class="control-label">Od data:</label><br>
    <!-- Datetime picker -->
    <div class="input-group date" id="datetimepicker">
        <input type="text" class="form-control">
        <div class="input-group-addon">
            <div class="glyphicon glyphicon-calendar"></div>
        </div>
    </div>
</div>

<!-- Add the extra clearfix for only the required viewport -->
<div class="clearfix visible-sm-block"></div>

<div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
    <div class="form-group" role="form">
        <label class="control-label">Jednotka:</label><br>
        <select class="form-control" id="event-author">
            <option value="None" selected>Všechny</option>
            <option value="ITS_42">ITS_42</option>
            <option value="ITS_54">ITS_54</option>
            <option value="ITS_ARROW">ITS_ARROW</option>
            <option value="ITS_CAR">ITS_CAR</option>
            <option value="ITS_SUMMER">ITS_SUMMER</option>
            <option value="ITS_WINTER">ITS_WINTER</option>
        </select>
    </div>
</div>

<div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
    <div class="form-group" role="form">
        <label class="control-label">Typ zprávy:</label><br>
        <select class="form-control" id="event-name">
            <option value="None" selected>Všechny</option>
            <option value="denm">DENM</option>
            <option value="gnss">GNSS</option>
            <option value="gpio">GPIO</option>
        </select>
    </div>
</div>

<!-- Add the extra clearfix for only the required viewport -->
<div class="clearfix visible-sm-block"></div>
