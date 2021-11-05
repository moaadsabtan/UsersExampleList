using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserApi.Models
{
    public class Filter
    {
        public int Skip { get; set; }
        public int Take { get; set; } = 50;
    }
}
