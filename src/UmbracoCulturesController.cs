using Newtonsoft.Json;
using System.Collections.Generic;
using System.Web.Mvc;
using Umbraco.Core.Models;
using Umbraco.Web.Mvc;
using Umbraco.Web.WebApi;

namespace AndrinaPortal.Controllers.Api
{
	[PluginController("UmbracoCultures")]
	public class UmbracoCulturesController : UmbracoAuthorizedApiController
	{
		[HttpGet]
		public string getCultures()
		{
			IEnumerable<ILanguage> languages = ApplicationContext.Services.LocalizationService.GetAllLanguages();
			List<string> codes = new List<string>();
			foreach (ILanguage lang in languages) {
				codes.Add(lang.IsoCode);
			}
			return JsonConvert.SerializeObject(codes);
		}
	}
}