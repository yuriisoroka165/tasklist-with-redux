import { useSelector } from "react-redux";

import { statusFilters } from "redux/constants";
import { getStatusFilter } from "redux/selectors";
import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
    // підписка на стор хуком useSelector
    // приймає функцію яка оголошує один параметр state
    // state це весь обєкт стану
    // функція яку приймає хук use Selector називається селектором і має повертати частину стану яка необхідна поточному компоненту
    // тут отримуємо значення фільтру зі стану Redux
    // const filter = useSelector(state => state.filters.status);
    
    // використовуємо імпортований селектор
    const filter = useSelector(getStatusFilter);

    return (
        <div className={css.wrapper}>
            {/* selected мається наувазі вибрана кнопка і взалежності від фільтра який активний в сторі буде і вибрана кнопка */}
            <Button selected={filter === statusFilters.all}>All</Button>
            <Button selected={filter === statusFilters.active}>Active</Button>
            <Button selected={filter === statusFilters.completed}>
                Completed
            </Button>
        </div>
    );
};
