import React, {FC} from 'react';
import styles from './Exchanger.module.scss';

interface ExchangerProps {
}

const Exchanger: FC<ExchangerProps> = () => {

	return <div className={styles.Exchanger} data-testid="Exchanger">

	</div>
};

export default Exchanger;
