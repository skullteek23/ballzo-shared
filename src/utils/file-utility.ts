export const FileType = {
  cad: 'image/vnd.dwg',
  excel: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  imageJPEG: 'image/jpeg',
  imagePNG: 'image/png',
  image: 'image/*',
  octetStream: 'application/octet-stream',
  pdf: 'application/pdf',
  word: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  csv: 'text/csv',
  zip: '.zip',
}

/**
 * Sanitizes the file name
 * @param fileName
 * @returns
 */
export function sanitizeFileName(fileName: string, separator: string): string {
  return fileName.replace(/\s+/g, separator);
}

/**
 * Converts base64 to file
 * @param dataUrl
 * @param filename
 * @returns {File}
 */
export function dataURLtoFile(dataUrl: any, filename: string): File {
  var arr = dataUrl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[arr.length - 1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
