import { HttpHandlerFn, HttpRequest } from '@angular/common/http';

export function demoInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  console.log(request);
  return next(request);
}
