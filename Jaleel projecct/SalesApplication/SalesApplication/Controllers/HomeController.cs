using Newtonsoft.Json;
using SalesApplication.API.ALL;
using SalesApplication.API.DAL;
using SalesApplication.Filter;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;

namespace SalesApplication.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [AuthorizationToken]
        public ActionResult Dashboard()
        {
            return View();
        }
        [AuthorizationToken]
        public ActionResult Bill()
        {
            

            return View();
        }
        [AuthorizationToken]
        public ActionResult Report()
        {
           

            return View();
        }


        

        [HttpGet]
      
        public JsonResult Login(string UserName,string Password)
        {
            string xmlstr = "";
            SalesApplicationDAL objDal = new SalesApplicationDAL();
            DataTable dt = objDal.login(UserName, Password);
            if (dt.Rows.Count > 0)
            {
                Session["UserId"] = dt.Rows[0]["UserId"];
            }
            var json = JsonConvert.SerializeObject(dt);
            return Json(json.ToString(), JsonRequestBehavior.AllowGet);

            

        }

        
        [HttpGet]
        public JsonResult FillSalesMan()
        {
            string xmlstr = "";
            SalesApplicationDAL objDal = new SalesApplicationDAL();
            DataTable dt = objDal.FillSalesMan();
            var json = JsonConvert.SerializeObject(dt);
            return Json(json.ToString(), JsonRequestBehavior.AllowGet);



        }

        [HttpGet]
        public JsonResult FillRoute()
        {
            string xmlstr = "";
            SalesApplicationDAL objDal = new SalesApplicationDAL();
            DataTable dt = objDal.FillRoute();
            var json = JsonConvert.SerializeObject(dt);
            return Json(json.ToString(), JsonRequestBehavior.AllowGet);



        }

        [HttpGet]
        public JsonResult FillShopName()
        {
            string xmlstr = "";
            SalesApplicationDAL objDal = new SalesApplicationDAL();
            DataTable dt = objDal.FillShopName();
            var json = JsonConvert.SerializeObject(dt);
            return Json(json.ToString(), JsonRequestBehavior.AllowGet);



        }

        [HttpGet]

        public JsonResult SaveBill(string Date, int SalesManId,int RouteId, int ShopNameId,float BillAmount,float CashRecived,int BillId)
        {
            var UserId =Convert.ToInt32(Session["UserId"].ToString());
            string xmlstr = "";
            SalesApplicationDAL objDal = new SalesApplicationDAL();
            DataTable dt = objDal.SaveBill(Date, SalesManId, RouteId, ShopNameId, BillAmount, CashRecived, BillId, UserId);
            var json = JsonConvert.SerializeObject(dt);
            return Json(json.ToString(), JsonRequestBehavior.AllowGet);



        }


        [HttpGet]

        public JsonResult ListBill(string Date, int SalesManId, int RouteId, int ShopNameId,int PageIndex ,int PageSize,int EnablePaging)
        {
           
            string xmlstr = "";
            SalesApplicationDAL objDal = new SalesApplicationDAL();
            DataSet ds = objDal.ListBill(Date, SalesManId, RouteId, ShopNameId,PageIndex,PageSize,EnablePaging);
            var json = JsonConvert.SerializeObject(ds);
            return Json(json.ToString(), JsonRequestBehavior.AllowGet);

        }


        

        [HttpGet]

        public JsonResult GetBillById( int BillId)
        {
           
           
            SalesApplicationDAL objDal = new SalesApplicationDAL();
            DataTable dt = objDal.GetBillById(BillId);
            var json = JsonConvert.SerializeObject(dt);
            return Json(json.ToString(), JsonRequestBehavior.AllowGet);

        }


        [HttpGet]

        public JsonResult DeleteBill(int BillId)
        {


            SalesApplicationDAL objDal = new SalesApplicationDAL();
            DataTable dt = objDal.DeleteBill(BillId);
            var json = JsonConvert.SerializeObject(dt);
            return Json(json.ToString(), JsonRequestBehavior.AllowGet);

        }


        [HttpGet]

        public JsonResult ListReport(string FromDate, string ToDate)
        {

            string xmlstr = "";
            SalesApplicationDAL objDal = new SalesApplicationDAL();
            DataSet ds = objDal.ListReport(FromDate, ToDate);
            var json = JsonConvert.SerializeObject(ds);
            return Json(json.ToString(), JsonRequestBehavior.AllowGet);

        }
    }



  
}

