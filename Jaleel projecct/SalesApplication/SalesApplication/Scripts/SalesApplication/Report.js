
var objReport = new Report();

Report.prototype.init = function () {

   
    $("#txtFromDate").datepicker({
        dateFormat: 'yy-mm-dd'
    });

    $("#txtToDate").datepicker({
        dateFormat: 'yy-mm-dd'
    });
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    $("#txtToDate").val(today);
    $("#txtFromDate").val(today);

}

function Report() {

}

Report.prototype.ListReport = function () {
    var FromdateText = $("#txtFromDate").val();

    var Fd = new Date(FromdateText.split("/").reverse().join("-"));
    var Fdd = Fd.getDate();
    var Fmm = Fd.getMonth() + 1;
    var Fyy = Fd.getFullYear();
    var Fromdate = Fyy + "-" + Fmm + "-" + Fdd;


    var TodateText = $("#txtToDate").val();

    var Td = new Date(TodateText.split("/").reverse().join("-"));
    var Tdd = Td.getDate();
    var Tmm = Td.getMonth() + 1;
    var Tyy = Td.getFullYear();
    var ToDate = Tyy + "-" + Tmm + "-" + Tdd;

   
    

    $.ajax({
        url: "/Home/ListReport",
        type: "Get",
        data: { "FromDate": Fromdate, "ToDate": ToDate },
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var htmloption = "";
            $('#divReportList').html("");
            if (data.d != "") {
                var objdata = $.parseJSON(data);
                if (objdata.Table.length > 0) {
                    htmloption = "<table class='table table-striped table-bordered table-condensed table-hover' cellspacing='0' width='100%'>"
                        + "<thead>"
                        + "<tr>"
                        + "<th>SL.No</th>"
                        + "<th>Date</th>"
                       
                        + "<th>Shop</th>"
                        + "<th>Total Bill AMount</th>"
                        
                        + "<th>Cash Recived</th>"
                        + "<th>RunningBal</th>"
                        + "<th>Daily Cash</th>"
                        + "<th>Daily Credit</th>"
                        + "<th>Creadit Recovery</th>"
                        + "</tr>"
                        + "</thead>"
                        + "<tbody>"
                    $.each(objdata.Table, function (key, value) {
						

                        htmloption += "<tr><td>" + value.SlNo + "</td><td>" + value.Date + "</td><td>" + value.Name + "</td><td>" + value.TotalBillAMount + "</td><td>" + value.CashRecivied + "</td><td>" + value.RunningBal + "</td><td>" + value.DailyCash + "</td><td>" + value.DailyCredit + "</td><td>" + value.CreditRecovery + "</td></tr>";
                    });
                    htmloption += "</tbody></table>";
                    $('#divReportList').html(htmloption);
                }
                else {
                    $('#divReportList').html("No data found");
                }
            }
            else {
                $('#divReportList').html("No data found");
            }

            if (objdata.Table.length > 0) {
                var htmloption = "<table class='table table-striped table-bordered table-condensed table-hover' style='position: absolute;bottom: -384px;' cellspacing='0' width='100%'>"
                    + "<thead>"
                    + "<tr>"                   
                    + "<th>Date</th>"                   
                    + "<th>Total Bill AMount</th>"
                    + "<th>Daily Cash</th>"
                    + "<th>Daily Credit</th>"
                    + "<th>Running Balance</th>"
                    + "<th>Cash Recivied</th>"
                    + "<th>Creadit Recovery</th>"
                    + "</tr>"
                    + "</thead>"
                    + "<tbody>"
                $.each(objdata.Table1, function (key, value) {


                    htmloption += "<tr><td>" + value.Date + "</td><td>" + value.TotalBillAMount + "</td><td>" + value.DailyCash + "</td><td>" + value.DailyCredit + "</td><td>" + value.RunningBal + "</td><td>" + value.CashRecivied + "</td><td>" + value.CreditRecovery + "</td></tr>";
                });
                htmloption += "</tbody></table>";
                $('#divReportMain').html(htmloption);
            }

                
           
        },
        error: function (data, status, error) {

        }

    });
}