export const
  phong_validation = {
    'TenPhong': [
      { type: 'required', message: 'Không được để trống' },
    ],
    'KhuID': [
      { type: 'required', message: 'Không được để trống' },

    ],
    'SoLuongChua': [
      { type: 'required', message: 'Không được để trống' },
    ],
    'SoLuongDangO': [
      { type: 'required', message: 'Không được để trống' },
      { type: 'minlength', message: 'fullName phải chứa ít nhất 5 ký tự' },
      { type: 'maxlength', message: 'fullName Không được quá 50 ký tự' },
    ],
    'TinhTrang': [
      { type: 'required', message: 'Không được để trống' },
    ],
  };
