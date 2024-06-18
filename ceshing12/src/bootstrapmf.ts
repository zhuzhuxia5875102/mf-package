import { bootstrap } from '@angular-architects/module-federation-tools';


import {environment} from "./environments/environment";
import {MeModule} from "./app/me/me.module";
import {Me2Module} from "./app/me2/me2.module";

bootstrap(Me2Module, { production: environment.production });
bootstrap(MeModule, { production: environment.production });
