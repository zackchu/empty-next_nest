import { Injectable, Logger } from "@nestjs/common";
import next from "next";

@Injectable()
export class ViewsService {
  private app;

  async onModuleInit() {
    try {
      this.app = next({
        dev: process.env.NODE_ENV === "development",
        dir: "./client",
      });

      await this.app.prepare();
      Logger.log("next服务启动成功");
    } catch (e) {
      Logger.error(e);
    }
  }

  handlePages(req, res) {
    Logger.log(`[next] Get ${req.url}`);
    const handle = this.app.getRequestHandler();

    handle(req, res);
  }
}
