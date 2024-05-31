using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SalesApplication.API.ALL
{
    public class APIResponse<T>
    {

        public int HttpStatusCode { get; set; }
        public int StatusCode { get; set; }
        public int ResultCount { get; set; }
        public string Message { get; set; }
        public string ExMessge { get; set; }

        public object data { get; set; }
        public List<T> resultList;
        public APIResponse()
        {

            resultList = new List<T>();

        }

    }
}