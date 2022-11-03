import { Link } from 'react-router-dom';

function NotFoundPage() : JSX.Element {
  return (
    <section>
      <h1>404. Страница не найдена</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundPage;
