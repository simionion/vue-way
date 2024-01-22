import swal from 'sweetalert'

export default function flash(message, type = 'success') {
  return swal(message, 'Sub message', type)
}
