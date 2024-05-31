using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace SalesApplication.API.DAL
{
    public class SalesApplicationDAL
    {

        DAL objDal = new DAL();
  
        


        public DataTable login(string UserName, string Password) // passing Bussiness object Here  
        {
            try
            {
                /* Because We will put all out values from our (UserRegistration.aspx) To in Bussiness object and then Pass it to Bussiness logic and then to DataAcess  this way the flow carry on*/
                DataSet ds = new DataSet();
                SqlCommand cmd = new SqlCommand("SP_LOGIN");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@UserName", UserName);
                cmd.Parameters.AddWithValue("@Password", Password);
                ds= objDal.ExcecuteDataSet(cmd);
                DataTable dataTable = ds.Tables["Table"];
                return dataTable;
                


                
            }
            catch (Exception ex)
            {
                throw;
            }
        }



        public DataTable FillSalesMan() // passing Bussiness object Here  
        {
            try
            {
                /* Because We will put all out values from our (UserRegistration.aspx) To in Bussiness object and then Pass it to Bussiness logic and then to DataAcess  this way the flow carry on*/
                DataSet ds = new DataSet();
                SqlCommand cmd = new SqlCommand("SP_GeAllSalesMan");
                cmd.CommandType = CommandType.StoredProcedure;

                ds = objDal.ExcecuteDataSet(cmd);
                DataTable dataTable = ds.Tables["Table"];
                return dataTable;

            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public DataTable FillRoute() // passing Bussiness object Here  
        {
            try
            {
                /* Because We will put all out values from our (UserRegistration.aspx) To in Bussiness object and then Pass it to Bussiness logic and then to DataAcess  this way the flow carry on*/
                DataSet ds = new DataSet();
                SqlCommand cmd = new SqlCommand("SP_GetAllRoute");
                cmd.CommandType = CommandType.StoredProcedure;

                ds = objDal.ExcecuteDataSet(cmd);
                DataTable dataTable = ds.Tables["Table"];
                return dataTable;

            }
            catch (Exception ex)
            {
                throw;
            }
        }


        public DataTable FillShopName() 
        {
            try
            {
               
                DataSet ds = new DataSet();
                SqlCommand cmd = new SqlCommand("SP_GetAllShopName");
                cmd.CommandType = CommandType.StoredProcedure;

                ds = objDal.ExcecuteDataSet(cmd);
                DataTable dataTable = ds.Tables["Table"];
                return dataTable;

            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public DataTable SaveBill(string Date, int SalesManId, int RouteId, int ShopNameId, float BillAmount, float CashRecived, int BillId,int UserId)
        {
            try
            {

                DataSet ds = new DataSet();
                SqlCommand cmd = new SqlCommand("SP_SaveBill");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Date", Date);
                cmd.Parameters.AddWithValue("@SalesManId", SalesManId);
                cmd.Parameters.AddWithValue("@RouteId", RouteId);
                cmd.Parameters.AddWithValue("@ShopNameId", ShopNameId);
                cmd.Parameters.AddWithValue("@BillAmount", BillAmount);
                cmd.Parameters.AddWithValue("@CashRecived", CashRecived);
                cmd.Parameters.AddWithValue("@BillId", BillId);
                cmd.Parameters.AddWithValue("@CreatedBy", UserId);
                ds = objDal.ExcecuteDataSet(cmd);
                DataTable dataTable = ds.Tables["Table"];
                return dataTable;

            }
            catch (Exception ex)
            {
                throw;
            }
        }


        public DataSet ListBill(string Date, int SalesManId, int RouteId, int ShopNameId, int PageIndex, int PageSize, int EnablePaging)
        {
            try
            {

                DataSet ds = new DataSet();
                SqlCommand cmd = new SqlCommand("SP_Listbill");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Date", Date);
                cmd.Parameters.AddWithValue("@SalesManId", SalesManId);
                cmd.Parameters.AddWithValue("@RouteId", RouteId);
                cmd.Parameters.AddWithValue("@ShopNameId", ShopNameId);
                cmd.Parameters.AddWithValue("@PageIndex", PageIndex);
                cmd.Parameters.AddWithValue("@PageSize", PageSize);
                cmd.Parameters.AddWithValue("@EnablePaging", EnablePaging);
                ds = objDal.ExcecuteDataSet(cmd);
              
                return ds;

            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public DataTable GetBillById(int BillId)
        {
            try
            {

                DataSet ds = new DataSet();
                SqlCommand cmd = new SqlCommand("SP_GetBillById");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@BillId", BillId);
                ds = objDal.ExcecuteDataSet(cmd);
                DataTable dataTable = ds.Tables["Table"];
                return dataTable;

            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public DataTable DeleteBill(int BillId)
        {
            try
            {

                DataSet ds = new DataSet();
                SqlCommand cmd = new SqlCommand("SP_DeleteBill");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@BillId", BillId);
                ds = objDal.ExcecuteDataSet(cmd);
                DataTable dataTable = ds.Tables["Table"];
                return dataTable;

            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public DataSet ListReport(string Fromdate ,string ToDate)
        {
            try
            {

                DataSet ds = new DataSet();
                SqlCommand cmd = new SqlCommand("SP_ProGetDailyReport");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@FromDate", Fromdate);
                cmd.Parameters.AddWithValue("@ToDate", ToDate);
                ds = objDal.ExcecuteDataSet(cmd);
                
                return ds;

            }
            catch (Exception ex)
            {
                throw;
            }
        }
        

    }
}