import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faList } from '@fortawesome/free-solid-svg-icons';

const LIST_VIEW_ICONS = [faList, faBorderAll];

const FilteringMenu = ({ onChange, filter }) => {
  const icon = filter.view.list ? faBorderAll : faList;

  return (
    <div className="filtering-menu mb-2">
      <FontAwesomeIcon
        className="clickable hoverable"
        icon={icon}
        size="lg"
        onClick={() => onChange('view', { list: +!filter.view.list })}
      />
    </div>
  );
};

export default FilteringMenu;
