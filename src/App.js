import Card from './components/Card'
import Header from './components/Header'
import styles from './styles.module.css'

import { LONG_CARDS, SHORT_CARDS } from './content.js'

function App () {
  return (
        <div className={styles.container}>

            <Header />

            <div className={styles.card_container}>

                {LONG_CARDS.map((item) => (
                    <Card key={item.id} length="long" item={item} />
                ))}

                <div className={styles.card_container_right}>

                    {SHORT_CARDS.map((item) => (
                        <Card key={item.id} length="small" item={item} />
                    ))}

                </div>
            </div>

        </div>
  )
}

export default App
