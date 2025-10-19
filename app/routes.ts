import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("proyectos/:id", "routes/proyectos.$id.tsx")
] satisfies RouteConfig;
