using CTGWebAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CTGWebAPI.Controllers
{
    [Route("api/[controller]")]
    public class TrainingController : Controller
    {
        private static IEnumerable<TraningViewModel> trainings = InitTrainings();

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(trainings);        
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(trainings.Where(_ => _.Id == id));
        }

        private static IEnumerable<TraningViewModel> InitTrainings()
        {
            var trainings = new List<TraningViewModel>();

            trainings.Add(new TraningViewModel { Id = 1, Name = "React Native Basics" });
            trainings.Add(new TraningViewModel { Id = 2, Name = "Web API" });

            return trainings;
        }
    }
}
