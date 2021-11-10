<template>
    <v-app>
        <v-app-bar app dark>
            <v-btn>
                <!-- Check that the SDK client is not currently loading before accessing is methods -->
                <div v-if="!$auth.loading">
                    <!-- show login when not authenticated -->
                    <a
                        class="d-flex align-right mr-2 button is-dark"
                        v-if="!$auth.isAuthenticated"
                        @click="login"
                    >
                        <strong>Sign in</strong>
                    </a>
                    <!-- show logout when authenticated -->
                    <a
                        v-if="$auth.isAuthenticated"
                        @click="logout"
                        class="d-flex align-right mr-2 button is-dark"
                    >
                        <strong>Log out</strong>
                    </a>
                </div>
            </v-btn>

            <div v-if="$auth.isAuthenticated" class="d-flex align-center mr-2">KPN Data Registry</div>

            <v-btn v-if="$auth.isAuthenticated" to="/datasets" text>Datasets</v-btn>

            <v-btn v-if="$auth.isAuthenticated" to="/add" text>Add new datasets</v-btn>
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: "app",
    components: {},
    methods: {
        // Log the user in
        login() {
            this.$auth.loginWithRedirect();
        },
        // Log the user out
        logout() {
            this.$auth.logout({
                returnTo: window.location.origin
            });
        }
    }
};
</script>