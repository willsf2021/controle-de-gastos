import "./Login.scss";

export const Login = () => {
  return (
    <section>
      <div className="container-form">
        <form>
          <h1>Entre na sua conta</h1>
          <label className="container-input">
            Email
            <input type="email" placeholder="exemplo@email.com" />
          </label>
          <label className="container-input">
            Senha {/* <NavLink to="/esqueceu-senha"> */}
            <a href="#" className="forget-password">
              Esqueceu a senha ?
            </a>
            {/* </NavLink> */}
            <input type="email" placeholder="Insira sua senha" />
          </label>
          <button>Entrar</button>
        </form>
        <span>
          Não Possui Conta ?{" "}
          <a href="#" className="forget-password">
            Registre-se
          </a>
        </span>
      </div>
    </section>
  );
};
