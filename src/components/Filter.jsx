import * as React from 'react';
import PropTypes from 'prop-types';
import { Select } from '@mui/base/Select';
import { Option as BaseOption } from '@mui/base/Option';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

const getOptionColorClasses = ({ selected, highlighted, disabled }) => {
  let classes = '';
  if (disabled) {
    classes += 'text-slate-400 dark:text-slate-700';
  } else {
    if (selected) {
      classes +=
        ' bg-[#E13C52] text-white';
    } else if (highlighted) {
      classes +=
        ' bg-slate-100 text-slate-900';
    }
    classes +=
      ' hover:bg-[#E13C52] transition-colors';
  }
  return classes;
};

const Option = React.forwardRef((props, ref) => {
  return (
    <BaseOption
      ref={ref}
      {...props}
      slotProps={{
        root: ({ selected, highlighted, disabled }) => ({
          className: `list-none p-2 rounded-lg cursor-pointer last-of-type:border-b-0 ${getOptionColorClasses(
            { selected, highlighted, disabled },
          )}`,
        }),
      }}
    />
  );
});

Option.displayName = 'Option';



export default function Filter({ geners, fetch }) {
  const dispatch = useDispatch();
  const [selectedGenre, setSelectedGenre] = React.useState(0);


  React.useEffect(() => {
    const searchParams = {
      genreId: selectedGenre,
      page: 1
    }
    dispatch(fetch(searchParams));
  }, [dispatch, selectedGenre, fetch]);

  const handleGenreChange = (event, newValue) => {
    console.log(newValue, 'это выбраный жанр')
    setSelectedGenre(newValue); 
  };
  return (
    
    <div className='mt-5 sm:mt-7 text-center'>
      <h2 className='text-white bg-opacity-95  text-2xl font-bold mb-3'>Choose the genre</h2>
      <CustomSelect defaultValue={0} onChange={handleGenreChange} >
         <Option value={0}>All</Option>
        {geners.map((elem) => (
          <Option value={elem.id} key={elem.id}>{elem.name}</Option>
        )) }
      </CustomSelect>
    </div>
  );
}

const resolveSlotProps = (fn, args) => (typeof fn === 'function' ? fn(args) : fn);

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  return (
    <Select
      ref={ref}
      {...props}
      className={clsx('CustomSelect', props.className)}
      slotProps={{
        ...props.slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `text-sm
              max-sm:max-w-[240px]
              max-xsm:w-full
              text-white 
              box-border 
              w-80 
              px-3 
              py-2 
              rounded-lg 
              text-left 
              bg-black 
              bg-opacity-30 
              border 
              border-solid 
              border-slate-200  
              text-slate-900  
              transition-all 
              outline-0 
              shadow 
              shadow-slate-200
              cursor-pointer
               ${
                ownerState.open ? 'after:content-["▴"]' : 'after:content-["▾"]'
              } after:float-right`,
              resolvedSlotProps?.className,
            ),
          };
        },
        listbox: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.listbox,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `text-sm
              w-30
              text-white
              p-1.5
              my-3
              sm:w-80
              rounded-xl
              overflow-auto
              outline-0
              bg-black
               bg-opacity-95
              border
              border-solid
              border-slate-200
              text-slate-900
              shadow
              shadow-slate-200
              `,
              resolvedSlotProps?.className,
            ),
          };
        },
        popper: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.popper,
            ownerState,
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              "z-10",
              resolvedSlotProps?.className,
            ),
          };
        },
      }}
    />
  );
});

Filter.propTypes = {
  geners: PropTypes.array,
  fetch: PropTypes.func
}

CustomSelect.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  /**
   * The props used for each slot inside the Input.
   * @default {}
   */
  slotProps: PropTypes.shape({
    listbox: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    popper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
};