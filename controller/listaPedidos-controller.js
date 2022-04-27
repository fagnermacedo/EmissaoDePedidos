import { pedidosService } from "../service/pedidos-service.js";

pedidosService.listaPedidos()
    .then(console.log("teste"))