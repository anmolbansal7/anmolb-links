/* eslint-disable camelcase */
import styles from './styles.module.css'

function Card ({ length = '', item = {} }) {
  const { title = '', button_label = '', button_url = '#', video = '', image = '' } = item

  return (
        <div className={`${styles.card} ${styles[length]}`} >
            {
            video &&
                <video autoPlay muted loop className={styles.video}>
                    <source src={video} type="video/mp4" />
                </video>
            }

            {
                image &&
                <img src={image} className={styles.image}></img>
            }

            <div className={styles.card_desc}>
                {title}
                {
                button_url &&
                    <a href={button_url} target='_blank' rel="noreferrer">
                        <button className={styles.button}>{button_label}</button>
                    </a>
                }
            </div>
        </div>
  )
}

export default Card
