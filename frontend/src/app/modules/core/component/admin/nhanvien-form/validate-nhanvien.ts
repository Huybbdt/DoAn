export const
  nhanvien_validation = {
    'HoTen': [
      { type: 'required', message: 'Không được để trống' },
    ],
    'GioiTinh': [
      { type: 'required', message: 'Không được để trống' },

    ],
    'NgaySinh': [
      { type: 'required', message: 'Không được để trống' },
    ],
    'SDT': [
      { type: 'required', message: 'Không được để trống' },
      { type: 'minlength', message: 'fullName phải chứa ít nhất 5 ký tự' },
      { type: 'maxlength', message: 'fullName Không được quá 50 ký tự' },
    ],
    'CMND': [
      { type: 'required', message: 'Không được để trống' },
    ],
    'NoiCap': [
      { type: 'required', message: 'Không được để trống' },
    ],
    'DanToc': [
      { type: 'required', message: 'Không được để trống' },
    ],
    'TonGiao': [
      { type: 'required', message: 'Không được để trống' },
    ],
    'DiaChi': [
      { type: 'required', message: 'Không được để trống' },
    ],
    'ChucVu': [
      { type: 'required', message: 'Không được để trống' },
    ],
  };
