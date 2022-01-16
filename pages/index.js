import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Checkbox } from '../components/Checkbox';
import { CheckboxInput } from '../components/CheckboxInput';
import { Input } from '../components/Input';
import { InputCheckbox } from '../components/InputCheckbox';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>useSharedState demo</title>
        <meta name="description" content="A demo of a simple react hook for sharing state across components" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          useSharedState Demo by <a href="https://scaleupconsulting.com.au">Scaleup Consulting</a>
        </h1>

        <p className={styles.description}>
          This is a simple hook which can be initialised with{' '}
          <code className={styles.code}>const VARIABLE = new SharedStateTarget(initialValue);</code> outside a
          component, and then used within a component as{' '}
          <code className={styles.code}>const [state, setState] = VARIABLE.useSharedState();</code>
        </p>

        <div className={styles.grid}>
          <span className={styles.card}>
            <h2>Input field 1</h2>
            <p><Input/></p>
          </span>

          <span className={styles.card}>
            <h2>Input field 2</h2>
            <p><Input/></p>
          </span>

          <span className={styles.card}>
            <h2>Checkboxes 1</h2>
            <p><Checkbox id={1}/><Checkbox id={2}/></p>
          </span>

          <span className={styles.card}>
            <h2>Checkboxes 2</h2>
            <p><Checkbox id={1}/><Checkbox id={2}/></p>
          </span>

          <span className={styles.card}>
            <h2>Checkboxes - Input</h2>
            <p><CheckboxInput/></p>
          </span>

          <span className={styles.card}>
            <h2>Input - Checkboxes</h2>
            <p><InputCheckbox/></p>
          </span>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://scaleupconsulting.com.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src="./favicon.ico" alt="Scaleup Consulting Logo" width={16} height={16} />
          </span>
          {' '}Scaleup Consulting
        </a>
      </footer>
    </div>
  )
}
