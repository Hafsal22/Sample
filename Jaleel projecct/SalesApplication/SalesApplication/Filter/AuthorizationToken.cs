using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace SalesApplication.Filter
{
    public class AuthorizationToken : ActionFilterAttribute, IActionFilter
    {


        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if(HttpContext.Current.Session["UserId"]==null)
            {
                filterContext.Result = new RedirectToRouteResult(new RouteValueDictionary { { "Controller", "Home" }, { "action", "Index" } });
            }
            base.OnActionExecuting(filterContext);
        }
    }
}