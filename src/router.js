import Vue from "vue";
import Router from "vue-router";
// import TutorialsList from "@/components/TutorialsList.vue";
// import Tutorial from "@/components/Tutorial.vue";
// import AddTutorials from "@/components/AddTutorials.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/datasets",
            name: "datasets",
            component: () => import("./components/TutorialsList")
        },
        {
            path: "/datasets/:id",
            name: "datasets-details",
            component: () => import("./components/Tutorial")
        },
        {
            path: "/add",
            name: "add",
            component: () => import("./components/AddDatasets")
        }
    ]
});