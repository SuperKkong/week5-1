import React from 'react'

export const Heroes = () => {
  return (
    <div>
            <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://scontent.fbkk9-3.fna.fbcdn.net/v/t39.30808-6/476346223_1029419862558236_4019634891893437843_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGHJu3lK8aKuV_Q3l-GBEAQKVM-m6PbaVMpUz6bo9tpU8OZ63IPmhj5nOxBOis5ffijlq86C01AJRwsRrhLtFQ0&_nc_ohc=XSpdmIhZWkUQ7kNvgEIuMhG&_nc_oc=AdgJvYOOZLPxkgmaehg3B8kICSStdiKG_zucanuYRAhwo0nRez5ZUWh9eHSkHF19M4A&_nc_zt=23&_nc_ht=scontent.fbkk9-3.fna&_nc_gid=A_HTsvLiTf8BbiaTwKC94OH&oh=00_AYCGxyHXFZvuABKK9X2WqDEz9wXvepiQ7HGoji-Q1WT7Tw&oe=67AD23FD" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
            </div>
            <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
            <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
