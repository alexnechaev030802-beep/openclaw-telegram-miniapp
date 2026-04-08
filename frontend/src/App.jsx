const templates = [
  {
    id: 'personal',
    title: 'Personal AI Assistant',
    description: 'Личный AI-ассистент для задач, планирования и быстрых рабочих действий.',
  },
  {
    id: 'business',
    title: 'Business Assistant',
    description: 'Ассистент для владельца бизнеса: операции, контент, продажи, структура задач.',
  },
  {
    id: 'office',
    title: 'AI Office Starter',
    description: 'Стартовый AI-офис в Telegram с базовыми ролями и быстрым запуском.',
  },
]

export default function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <span className="eyebrow">OpenClaw MiniApp</span>
        <h1>Запусти AI-workspace в Telegram без ручной настройки</h1>
        <p className="hero-copy">
          Выбери стартовый шаблон, активируй доступ и получи готовую рабочую среду внутри Telegram.
        </p>
        <div className="hero-actions">
          <button className="primary-btn">Запустить workspace</button>
          <button className="secondary-btn">Посмотреть тарифы</button>
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <h2>Стартовые шаблоны</h2>
          <p>В MVP даём готовый результат, а не конструктор из 100 опций.</p>
        </div>
        <div className="template-grid">
          {templates.map((template) => (
            <article key={template.id} className="template-card">
              <h3>{template.title}</h3>
              <p>{template.description}</p>
              <button className="ghost-btn">Выбрать</button>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block status-block">
        <div>
          <span className="status-pill">MVP state</span>
          <h2>Activation flow</h2>
          <p>Landing → Template → Payment → Provisioning → Ready → First action</p>
        </div>
        <div className="status-panel">
          <div className="status-row">
            <span>Billing</span>
            <strong>Planned</strong>
          </div>
          <div className="status-row">
            <span>Provisioning</span>
            <strong>Planned</strong>
          </div>
          <div className="status-row">
            <span>Workspace</span>
            <strong>Awaiting activation</strong>
          </div>
        </div>
      </section>
    </main>
  )
}
