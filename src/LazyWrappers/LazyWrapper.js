import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "../ErrorBoundaries/ErrorBoundary";
import { Suspense } from "react";

const LazyWrapper = ({fallbackText, children})=>{
    return(
        <>
        <ErrorBoundary FallbackComponent={ErrorFallBack} onError={()=>{}}>
            <Suspense fallback={<div>{fallbackText|| "Loading..."}</div>}>
            {children}
            </Suspense>
        </ErrorBoundary>
        </>
    )
}
export default LazyWrapper;