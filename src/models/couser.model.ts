import { Deserializable } from './common/deserializable.model';

export class CouserModel implements Deserializable<CouserModel> {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  danhGia: number;
  hinhAnh: string;
  maNhom: string;
  ngayTao: string;
  maDanhMucKhoaHoc: string;
  taiKhoanNguoiTao: string;

  deserialize?(input: any): CouserModel {
    this.maKhoaHoc = input.maKhoaHoc ?? '';
    this.biDanh = input.biDanh ?? '';
    this.tenKhoaHoc = input.tenKhoaHoc ?? '';
    this.moTa = input.moTa ?? '';
    this.luotXem = input.luotXem ?? undefined;
    this.danhGia = input.danhGia ?? undefined;
    this.hinhAnh = input.hinhAnh ?? '';
    this.maNhom = input.maNhom ?? '';
    this.ngayTao = input.ngayTao ?? '';
    this.maDanhMucKhoaHoc = input.maDanhMucKhoaHoc ?? '';
    this.taiKhoanNguoiTao = input.taiKhoanNguoiTao ?? '';

    return this;
  }
}
