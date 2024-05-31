var objbill = new Bill();
var noOfRecords = 20;
var Index = 1;

Bill.prototype.init = function () {

   
    objbill.FillSalesManFilter();
    objbill.FillRouteFilter();
    objbill.FillShopNameFilter();

    objbill.FillSalesMan();
    objbill.FillRoute();
    objbill.FillShopName();
    
    $("#txtDate").datepicker({
        dateFormat: 'yy-mm-dd'
    });

    $("#txtDateFilter").datepicker({
        dateFormat: 'yy-mm-dd'
    });

    $('.number').keypress(function (event) {
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });

    objbill.ListBill(1);
}
function Bill() {

}


Bill.prototype.showModalForm = function (Type) {
    if (Type == "Create") {
        
    }
    $("#Popupbill").modal("show");
}


Bill.prototype.FillSalesManFilter = function () {

    $.ajax({
        url: "/Home/FillSalesMan",
        type: "Get",
        data: "",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var htmloption = "<option value='0'>--Select SalesMan--</option>";
            if (data.d != "") {
                var objdata = $.parseJSON(data);
                if (objdata.length > 0) {
                    $.each(objdata, function (key, value) {
                        htmloption += "<option value=" + value.SalesManId + ">" + value.Name + "</option>";
                    });
                }
            }
            $('#ddlSalesManFilter').html(htmloption);
            $('#ddlSalesManFilter').trigger("chosen:updated");
        },
        error: function (data, status, error) {

        }
    });

}

Bill.prototype.FillRouteFilter = function () {

    $.ajax({
        url: "/Home/FillRoute",
        type: "Get",
        data: "",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var htmloption = "<option value='0'>--Select Route--</option>";
            if (data.d != "") {
                var objdata = $.parseJSON(data);
                if (objdata.length > 0) {
                    $.each(objdata, function (key, value) {
                        htmloption += "<option value=" + value.RouteId + ">" + value.Name + "</option>";
                    });
                }
            }
            $('#ddlRouteFilter').html(htmloption);
            $('#ddlRouteFilter').trigger("chosen:updated");
        },
        error: function (data, status, error) {

        }
    });



}

Bill.prototype.FillShopNameFilter = function () {

    $.ajax({
        url: "/Home/FillShopName",
        type: "Get",
        data: "",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var htmloption = "<option value='0'>--Select Shop--</option>";
            if (data.d != "") {
                var objdata = $.parseJSON(data);
                if (objdata.length > 0) {
                    $.each(objdata, function (key, value) {
                        htmloption += "<option value=" + value.ShopId + ">" + value.ShopName + "</option>";
                    });
                }
            }
            $('#ddlShopNameFilter').html(htmloption);
            $('#ddlShopNameFilter').trigger("chosen:updated");
        },
        error: function (data, status, error) {

        }
    });
}


Bill.prototype.FillSalesMan = function () {

    $.ajax({
        url: "/Home/FillSalesMan",
        type: "Get",
        data:"",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var htmloption = "<option value='0'>--Select--</option>";
            if (data.d != "") {
                var objdata = $.parseJSON(data);
                if (objdata.length > 0) {
                    $.each(objdata, function (key, value) {
                        htmloption += "<option value=" + value.SalesManId + ">" + value.Name + "</option>";
                    });
                }
            }
            $('#ddlSalesMan').html(htmloption);
            $('#ddlSalesMan').trigger("chosen:updated");
        },
        error: function (data, status, error) {

        }
    });
    
}

Bill.prototype.FillRoute = function () {

    $.ajax({
        url: "/Home/FillRoute",
        type: "Get",
        data: "",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var htmloption = "<option value='0'>--Select--</option>";
            if (data.d != "") {
                var objdata = $.parseJSON(data);
                if (objdata.length > 0) {
                    $.each(objdata, function (key, value) {
                        htmloption += "<option value=" + value.RouteId + ">" + value.Name + "</option>";
                    });
                }
            }
            $('#ddlRoute').html(htmloption);
            $('#ddlRoute').trigger("chosen:updated");
        },
        error: function (data, status, error) {

        }
    });


    
}

Bill.prototype.FillShopName = function () {
    
    $.ajax({
        url: "/Home/FillShopName",
        type: "Get",
        data: "",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var htmloption = "<option value='0'>--Select--</option>";
            if (data.d != "") {
                var objdata = $.parseJSON(data);
                if (objdata.length > 0) {
                    $.each(objdata, function (key, value) {
                        htmloption += "<option value=" + value.ShopId + ">" + value.ShopName + "</option>";
                    });
                }
            }
            $('#ddlShopName').html(htmloption);
            $('#ddlShopName').trigger("chosen:updated");
        },
        error: function (data, status, error) {

        }
    });
}


Bill.prototype.SaveBill = function () {

    
    var BDate = $("#txtDate").val();

    var d = new Date(BDate.split("/").reverse().join("-"));
    var dd = d.getDate();
    var mm = d.getMonth() + 1;
    var yy = d.getFullYear();
    var BillDate = yy + "-" + mm + "-" + dd;

    var SalesManId = $("#ddlSalesMan").val();
    var RouteId = $("#ddlRoute").val();
    var ShopNameId = $("#ddlShopName").val();
    var BillAmount = $("#txtBillAmount").val();
    var CashRecived = $("#txtCashRecived").val();
    var BillId = $("#hdBillId").val() == "" ? 0 : $("#hdBillId").val() ;
        $.ajax({
            url: "/Home/SaveBill",
            type: "GET",
            data: { "Date": BillDate, "SalesManId": SalesManId, "RouteId": RouteId, "ShopNameId": ShopNameId, "BillAmount": BillAmount, "CashRecived": CashRecived, BillId: BillId},
            dataType: "json",
            contentType: "Application/json;charset=utf-8",
            success: function (data) {
                if (data.d != "") {
                    var objdata = $.parseJSON(data);
                    if (objdata[0].Result == "Sucess") {
                        if ($("#hdBillId").val() == 0)
                            alert("Sucessfully Saved");
                        else
                            alert("Sucessfully Updated");
                        $("#Popupbill").modal("hide");
                        objbill.ListBill(1);

                    }
                    

                }

            },
            error: function (request, status, error) {

            }
        });

    }


Bill.prototype.ListBill = function (Index) {
    var Date = $("#txtDateFilter").val();
    var SalesManId = $("#ddlSalesManFilter").val();
    var RouteId = $("#ddlRouteFilter").val();
    var ShopNameId = $("#ddlShopNameFilter").val();
    if (noOfRecords == 0)
        noOfRecords = 20;

    $.ajax({
        url: "/Home/ListBill",
        type: "Get",
        data: {
            "Date": Date, "SalesManId": SalesManId, "RouteId": RouteId, "ShopNameId": ShopNameId, "PageIndex": Index, "PageSize": noOfRecords,"EnablePaging": 1 },
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (data, status) {
            var htmloption = "";
            $('#divbillList').html("");
            if (data.d != "") {
                var objdata = $.parseJSON(data);
                if (objdata.Table.length > 0) {
                    var totalRowsCount = objdata.Table1[0].RecordCount;
                    htmloption = "<table class='table table-striped table-bordered table-condensed table-hover' cellspacing='0' width='100%'>"
                        + "<thead>"
                        + "<tr>"
                        + "<th>SL.No</th>"
                        + "<th>Date</th>"
                        + "<th>SalesMan</th>"
                        + "<th>Shop</th>"
                        + "<th>Route</th>"
                        + "<th>Bill Amount</th>"
                        + "<th>Cash Recived</th>"
                        + "<th>Created By</th>"
                        + "<th>Created Date</th>"
                        + "<th></th>"
                        + "<th></th>"
                        + "</tr>"
                        + "</thead>"
                        + "<tbody>"
                    $.each(objdata.Table, function (key, value) {

                        htmloption += "<tr><td>" + value.RowNumber + "</td><td>" + value.Date + "</td><td>" + value.SalesName + "</td><td>" + value.ShopName + "</td><td>" + value.RouteName + "</td><td>" + value.BillAmount + "</td><td>" + value.CashReceived + "</td><td>" + value.CreatedBy + "</td><td>" + value.CreatedDate + "</td><td><button id='btnEdit' class='btnfilter' onclick='objbill.GetBillById(" + value.BillId + ");'>Edit</button></td><td><button id='btnDelete' class='btnfilter' onclick='objbill.DeleteBill(" + value.BillId + ");'>Delete</button></td></tr>";
                    });
                    htmloption += "</tbody></table>";
                    $('#divbillList').html(htmloption);

                    if (totalRowsCount > noOfRecords) {

                        var pageCount = Math.ceil(totalRowsCount / noOfRecords);
                        $('#page-selection').html('');
                        $('#page-selection').bootpag({
                            total: pageCount,
                            page: Index
                        });

                        $('ul.pagination li').click(function () {
                            var num = $(this).attr('data-lp');
                            ObjMobilization.LoadMobilizationByFilters(num);
                        });
                    } else {
                        $('#page-selection').html("");
                    }
                }
                else {
                    $('#divbillList').html("No data found");
                }
            }
            else {
                $('#divbillList').html("No data found");
            }
           
            
        },
        error: function (data, status, error) {

        }

    });
}

Bill.prototype.DeleteBill = function (BillId) {


    
    $.ajax({
        url: "/Home/DeleteBill",
        type: "GET",
        data: { "BillId": BillId},
        dataType: "json",
        contentType: "Application/json;charset=utf-8",
        success: function (data) {
            if (data.d != "") {
                var objdata = $.parseJSON(data);
                if (objdata[0].Result == "Sucess") {

                    alert("Sucessfully Deleted");
                }
                else {
                    alert("Sucessfully Updated");
                }
                   
                    objbill.ListBill();

                


            }

        },
        error: function (request, status, error) {

        }
    });

}


Bill.prototype.GetBillById = function (BillId) {



    $.ajax({
        url: "/Home/GetBillById",
        type: "GET",
        data: { "BillId": BillId },
        dataType: "json",
        contentType: "Application/json;charset=utf-8",
        success: function (data) {
            if (data.d != "") {
                var objdata = $.parseJSON(data);
               
                    if (objdata.length > 0) {

                        $("#ddlSalesMan").val(objdata[0].SalesManId);                       
                        $("#ddlRoute").val(objdata[0].RouteId);                       
                        $("#ddlShopName").val(objdata[0].ShopNameId);
                        $("#txtBillAmount").val(objdata[0].BillAmount);
                        $("#txtCashRecived").val(objdata[0].CashReceived);
                        $("#hdBillId").val(objdata[0].BillId)
                        $("#txtDate").val(objdata[0].Date)

                        objbill.showModalForm();


                    }
                }
                objbill.ListBill();
        },
        error: function (request, status, error) {

        }
    });

}


Bill.prototype.ClearFilter = function () {
    $("#txtDateFilter").val("");
   $("#ddlSalesManFilter").val(0);
   $("#ddlRouteFilter").val(0);
    $("#ddlShopNameFilter").val(0);
    objbill.ListBill();

}