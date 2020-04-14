import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import * as courseActions from '../../../store/actions/courseActions';
import { course } from '../../../mocks/course.mock';

import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ListsCourse: React.FC<any> = (props) => {
  useEffect(() => {
    props.getListCourse();
  }, []);

  const { courses } = props;
  console.log('courses', props.courses);

  const renderCourse = () => {
    return courses && courses.length > 0
      ? courses.map((row: any, index: number) => (
          <TableRow key={index}>
            <TableCell component="th" scope="row" align="center">
              {index + 1}
            </TableCell>
            <TableCell align="left">{row.maKhoaHoc}</TableCell>
            <TableCell align="left">{row.tenKhoaHoc}</TableCell>
            <TableCell align="center">{row.luotXem}</TableCell>
            <TableCell align="left">{row.maNhom}</TableCell>
            <TableCell align="left">{row.ngayTao}</TableCell>
            <TableCell align="center">{row.soLuongHocVien}</TableCell>
            <TableCell align="left">
              {row.danhMucKhoaHoc.tenDanhMucKhoaHoc}
            </TableCell>

            <TableCell align="left">
              <IconButton>
                <UpdateIcon />
              </IconButton>
              <IconButton>
                <DeleteOutlineIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))
      : null;
  };
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {course.columns.map((column: any, index: number) => (
              <TableCell align="left" key={index}>
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{renderCourse()}</TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

export default connect(mapStateToProps, courseActions)(ListsCourse);
