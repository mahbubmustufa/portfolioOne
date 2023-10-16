export default function TestimonialsItem(){
    return(
        <>
            <div
            className="
              flex flex-col
              items-center
              p-6
              space-y-6
              rounded-lg
              bg-varyLigntGray
              md:w-1/3
            "
          >
            <img
              className="w-16 h-16 -mt-14 rounded-full"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QFmRXhpZgAASUkqAAgAAAADAA4BAgAQAQAAMgAAAJiCAgAcAAAAQgEAABIBAwABAAAAAQAAAAAAAABNVUxUQU4sIFBBS0lTVEFOIC0gREVDRU1CRVIgMTI6IFVtcGlyZSBBbGVlbSBEYXIgcG9zZXMgZm9yIGEgcGhvdG9ncmFwaCBiZWZvcmUgdGhlIGZvdXJ0aCBkYXkgb2YgdGhlIHNlY29uZCBUZXN0IGJldHdlZW4gUGFraXN0YW4gYW5kIEVuZ2xhbmQgYXQgTXVsdGFuIENyaWNrZXQgU3RhZGl1bSBvbiBEZWNlbWJlciAxMiwgMjAyMiBpbiBNdWx0YW4sIFBha2lzdGFuLiAoUGhvdG8gYnkgUGhpbGlwIEJyb3duL1BvcHBlcmZvdG8vUG9wcGVyZm90byB2aWEgR2V0dHkgSW1hZ2VzKTIwMjIgUGhpbGlwIEJyb3duL1BvcHBlcmZvdG//7QGOUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAXIcAlAAF1BoaWxpcCBCcm93bi9Qb3BwZXJmb3RvHAJ4ARBNVUxUQU4sIFBBS0lTVEFOIC0gREVDRU1CRVIgMTI6IFVtcGlyZSBBbGVlbSBEYXIgcG9zZXMgZm9yIGEgcGhvdG9ncmFwaCBiZWZvcmUgdGhlIGZvdXJ0aCBkYXkgb2YgdGhlIHNlY29uZCBUZXN0IGJldHdlZW4gUGFraXN0YW4gYW5kIEVuZ2xhbmQgYXQgTXVsdGFuIENyaWNrZXQgU3RhZGl1bSBvbiBEZWNlbWJlciAxMiwgMjAyMiBpbiBNdWx0YW4sIFBha2lzdGFuLiAoUGhvdG8gYnkgUGhpbGlwIEJyb3duL1BvcHBlcmZvdG8vUG9wcGVyZm90byB2aWEgR2V0dHkgSW1hZ2VzKRwCdAAcMjAyMiBQaGlsaXAgQnJvd24vUG9wcGVyZm90bxwCbgAbUG9wcGVyZm90byB2aWEgR2V0dHkgSW1hZ2Vz/+EGTmh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+Cgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6SXB0YzR4bXBDb3JlPSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvIiAgIHhtbG5zOkdldHR5SW1hZ2VzR0lGVD0iaHR0cDovL3htcC5nZXR0eWltYWdlcy5jb20vZ2lmdC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiBkYzpSaWdodHM9IjIwMjIgUGhpbGlwIEJyb3duL1BvcHBlcmZvdG8iIHBob3Rvc2hvcDpDcmVkaXQ9IlBvcHBlcmZvdG8gdmlhIEdldHR5IEltYWdlcyIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjE0NDg1MzIwMTIiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9ldWxhP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+UGhpbGlwIEJyb3duL1BvcHBlcmZvdG88L3JkZjpsaT48L3JkZjpTZXE+PC9kYzpjcmVhdG9yPjxkYzpkZXNjcmlwdGlvbj48cmRmOkFsdD48cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPk1VTFRBTiwgUEFLSVNUQU4gLSBE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"
              alt="Logo"
            />
            <h5 className="text-bold font-lg">Alim Dar</h5>
            <p className="text-sm text-darkGraisBlue">
              Go form tracking progess at the milestone level all the way done
              to the smallest of details. Never lose sight of the bigger picture
              again.
            </p>
          </div>
        </>
    )
}