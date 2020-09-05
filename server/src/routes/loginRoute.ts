import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

function requireAuth(req: RequestWithBody, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("Entry Permitted!");
}

router.get("/login", (req, res) => {
  res.send(`
      <form method="POST">
      <div>
      <label>Email</label>
      <input name='email' type='email' />
      </div>
      <div>
      <label>Password</label>
      <input name='password' type='password' />
      </div>
      <button type="submit">Submit</button> 
      </form>
      `);
});

router.post("/login", (req: RequestWithBody, res) => {
  const { email, password } = req.body;

  if (email && password) {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else res.send("You must provide email and password");
});

router.get("/", (req: RequestWithBody, res) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
        <div>
        <h2>You are Logged in</h2>
        <a href="/logout">Logout</a>
        </div>
        `);
  } else {
    res.send(`
    <div>
    <h2>You are not Logged in</h2>
    <a href="/login">Login</a>
    </div>
    `);
  }
});

router.get("/logout", (req: RequestWithBody, res) => {
  req.session = null;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: RequestWithBody, res: Response) => {
  res.send("Welcome");
});

export { router };
