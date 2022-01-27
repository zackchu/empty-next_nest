import { Controller, Get, Req, Res } from "@nestjs/common";
import { ViewsService } from "./views.service";

@Controller("views")
export class ViewsController {
  constructor(private readonly viewsService: ViewsService) {}

  @Get()
  getHomePages(@Req() req, @Res() res) {
    this.viewsService.handlePages(req, res);
  }

  @Get("*")
  getPages(@Req() req, @Res() res) {
    this.viewsService.handlePages(req, res);
  }

  @Get("_next*")
  getAssets(@Req() req, @Res() res) {
    this.viewsService.handlePages(req, res);
  }

  @Get("favicon.ico")
  getFavicon(@Req() req, @Res() res) {
    this.viewsService.handlePages(req, res);
  }
}
