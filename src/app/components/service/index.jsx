export default function Service() {
  return (
    <div id="Service" className="w-full">
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[26px] font-bold">SERVICE</h2>
          <hr class="mx-auto bg-dark" />
          <em>
            We keep on diversifying and expanding ourselves into full system
            integration service.
          </em>
        </div>
      </div>
      <div class="pt-5 flex-wrap">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[20px] flex-wrap">
          <div class="col-12 col-lg-4 bg-[#f8f8f8]">
            <div class="wrap pb-5 pt-3 px-3">
              <div class="service-icon my-4">
                <i class="fa-brands fa-searchengin">&#xf3eb;</i>
              </div>
              <h4>DATA RESEARCH</h4>
              <div class="box-border">
                <p>
                  Study and research desired target by survey and collecting
                  data both on-site and online (Digital Platform). Then, analyze
                  data in quantitative and qualitative terms in order to observe
                  target's behavior, interest, etc. in order to lead effective
                  strategy plans.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 bg-[#f8f8f8]">
            <div class="wrap pb-5 pt-3 px-3">
              <div class="service-icon my-4">
                <i class="fa-solid fa-chart-line"></i>
              </div>
              <h4>DATA ANALYSIS</h4>
              <div class="service-text">
                <p>
                  Execute In-depth data science analysis , as well as creating
                  reports by Data Visualization. In order to generate new
                  strategic planning with Data Driven in the future.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4 bg-[#f8f8f8]">
            <div class="wrap pb-5 pt-3 px-3">
              <div class="service-icon my-4">
                <i class="fa-sharp fa-solid fa-right-left"></i>
              </div>
              <h4>DATA TRANFORMATION</h4>
              <div class="service-text">
                <p>
                  Design, organize and develop digital data input systems to
                  ensure the effectiveness of data utilization such as data
                  collecting design in various platforms and system designing to
                  support the transformation from manual data to digital data.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-[20px] pt-[20px] md:grid-cols-2">
          <div class="col-12 col-md-6 bg-[#f8f8f8] w-full ">
            <div class="wrap pb-5 pt-3 px-3">
              <div class="service-icon my-4">
                <i class="fa-solid fa-robot"></i>
              </div>
              <h4>AI TECHNOLOGY</h4>
              <div class="service-text">
                <p>
                  Developing Artificial Intelligence (AI) technologies to avoid
                  unconscious human error in complex issues decision making.
                  This service included 3 domains which are signal, image and
                  NLP. We also provide AI design and develop services to support
                  customers in collecting and analyzing data effectively.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 bg-[#f8f8f8] w-full">
            <div class="wrap pb-5 pt-3 px-3">
              <div class="service-icon my-4">
                <i class="fa-solid fa-desktop"></i>
              </div>
              <h4>WEB AND SYSTEM</h4>
              <div class="service-text">
                <p>
                  Provide entirely design and develop web application services
                  to serve the best experiences to users while representing the
                  company's identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
