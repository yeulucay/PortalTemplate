import { Type } from 'angular2/src/facade/lang';
import { CanActivate } from './lifecycle_annotations_impl';
import { reflector } from 'angular2/src/core/reflection/reflection';
export function hasLifecycleHook(e, type) {
    if (!(type instanceof Type))
        return false;
    return e.name in type.prototype;
}
export function getCanActivateHook(type) {
    var annotations = reflector.annotations(type);
    for (let i = 0; i < annotations.length; i += 1) {
        let annotation = annotations[i];
        if (annotation instanceof CanActivate) {
            return annotation.fn;
        }
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVfbGlmZWN5Y2xlX3JlZmxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvbGlmZWN5Y2xlL3JvdXRlX2xpZmVjeWNsZV9yZWZsZWN0b3IudHMiXSwibmFtZXMiOlsiaGFzTGlmZWN5Y2xlSG9vayIsImdldENhbkFjdGl2YXRlSG9vayJdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxJQUFJLEVBQVksTUFBTSwwQkFBMEI7T0FDakQsRUFBcUIsV0FBVyxFQUFDLE1BQU0sOEJBQThCO09BQ3JFLEVBQUMsU0FBUyxFQUFDLE1BQU0seUNBQXlDO0FBRWpFLGlDQUFpQyxDQUFxQixFQUFFLElBQUk7SUFDMURBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLFlBQVlBLElBQUlBLENBQUNBLENBQUNBO1FBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQzFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFTQSxJQUFLQSxDQUFDQSxTQUFTQSxDQUFDQTtBQUN4Q0EsQ0FBQ0E7QUFFRCxtQ0FBbUMsSUFBSTtJQUNyQ0MsSUFBSUEsV0FBV0EsR0FBR0EsU0FBU0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDOUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLFdBQVdBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO1FBQy9DQSxJQUFJQSxVQUFVQSxHQUFHQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNoQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsVUFBVUEsWUFBWUEsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdENBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLEVBQUVBLENBQUNBO1FBQ3ZCQSxDQUFDQTtJQUNIQSxDQUFDQTtJQUVEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtBQUNkQSxDQUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHlwZSwgaXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtSb3V0ZUxpZmVjeWNsZUhvb2ssIENhbkFjdGl2YXRlfSBmcm9tICcuL2xpZmVjeWNsZV9hbm5vdGF0aW9uc19pbXBsJztcbmltcG9ydCB7cmVmbGVjdG9yfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzTGlmZWN5Y2xlSG9vayhlOiBSb3V0ZUxpZmVjeWNsZUhvb2ssIHR5cGUpOiBib29sZWFuIHtcbiAgaWYgKCEodHlwZSBpbnN0YW5jZW9mIFR5cGUpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBlLm5hbWUgaW4oPGFueT50eXBlKS5wcm90b3R5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYW5BY3RpdmF0ZUhvb2sodHlwZSk6IEZ1bmN0aW9uIHtcbiAgdmFyIGFubm90YXRpb25zID0gcmVmbGVjdG9yLmFubm90YXRpb25zKHR5cGUpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFubm90YXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgbGV0IGFubm90YXRpb24gPSBhbm5vdGF0aW9uc1tpXTtcbiAgICBpZiAoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIENhbkFjdGl2YXRlKSB7XG4gICAgICByZXR1cm4gYW5ub3RhdGlvbi5mbjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiJdfQ==