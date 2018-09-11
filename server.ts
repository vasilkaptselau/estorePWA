import * as express from 'express';
import { join } from 'path';

import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

const PORT = process.env.PORT || 8080;
const staticRoot = join(process.cwd(), 'dist', 'superStore');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/superStore-server/main');

const app = express();
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', staticRoot);

app.get('*.*', express.static(staticRoot));
app.get('*', (req, res) => res.render('index', { req }));

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
