import {IOption} from "../components/Select/Select";
import {IRateDictionary} from "../redux/app-configuration/app-configuration.reducer";

class Utils {
	mapOptionsFromRates(rates: IRateDictionary): Array<IOption> {
		return Object.keys(rates).map(key => ({
			value: key,
			label: key,
			isSelected: false
		}));
	}
}

export default new Utils();
