using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace SalesApplication.API.DAL
{
    public class DAL
    {
        public static string connstring = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
        SqlConnection con = new SqlConnection(connstring);
        public DAL()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        public DataSet ExcecuteDataSet(SqlCommand cmd)
        {
            cmd.Connection = con;
            SqlDataAdapter obj_SqlAdapter = new SqlDataAdapter(cmd);
            DataSet obj_dataset = new DataSet();
            try
            {
                con.Open();
                obj_SqlAdapter.Fill(obj_dataset);

            }
            catch (System.IO.IOException e)
            {
                con.Close();
                Console.WriteLine("system error message =", e.Message);
            }
            finally
            {
                con.Close();
            }
            return obj_dataset;
        }

        public bool ExcecuteNonQuery(SqlCommand cmd)
        {
            bool r_eff = false;
            cmd.Connection = con;
            try
            {
                con.Open();
                cmd.ExecuteNonQuery();
                r_eff = true;
            }
            catch (System.IO.IOException e)
            {
                Console.WriteLine("system error message =", e.Message);
                r_eff = false;
                con.Close();

            }
            finally
            {
                con.Close();
            }
            return r_eff;

        }

    }
}