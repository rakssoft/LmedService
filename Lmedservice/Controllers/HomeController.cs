using Lmedservice.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Diagnostics;

namespace Lmedservice.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        // Метод действия для аналитики
        [Route("Home/Content/Analytics")]
        public IActionResult Analytics()
        {
            try
            {
                return PartialView("~/Views/Home/Content/_Analytics.cshtml"); // Обновленный путь
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error loading Analytics partial view");
                return StatusCode(500, "Internal server error");
            }
        }

        // Метод действия для отчетов
        [Route("Home/Content/Reports")]
        public IActionResult Reports()
        {
            try
            {
                return PartialView("~/Views/Home/Content/_Reports.cshtml"); // Обновленный путь
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error loading Reports partial view");
                return StatusCode(500, "Internal server error");
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
