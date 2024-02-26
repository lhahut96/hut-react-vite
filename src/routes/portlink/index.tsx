import './styles.scss';
import PortLinkButton from '@/components/Button/PortLink/PortLinkButton.tsx';
import { ButtonTypeProps } from '@/components/Button/ButtonConstant.ts';

const SampleComponent = () => {
  return (
    <section className="portLink p-16">
      <div className="mx-auto my-0 flex max-h-[680px] max-w-[680px] flex-col gap-4">
        <div className="information flex flex-col items-center justify-center gap-4">
          <img
            className="size-24 rounded-full"
            src="https://ugc.production.linktr.ee/yaVrQzTQkmrGvR2j75na_mCHui2xvowNrjxdg?io=true&size=avatar-v3_0"
            alt="icon"
          />
          <div className="mb-4 flex flex-col gap-2 text-blue-port">
            <h1 className="m-0 text-center text-xl font-bold">Honeyed Pastry</h1>
            <h2 className="text-center font-medium">Good pastry for a good day</h2>
          </div>
        </div>
        <div className="link flex flex-col gap-4">
          <PortLinkButton
            type={ButtonTypeProps.PRIMARY}
            link="https://google.com.vn"
            text="Menu"
            newTab
          ></PortLinkButton>
          <PortLinkButton
            type={ButtonTypeProps.PRIMARY}
            link="https://google.com.vn"
            text="Online Order"
            newTab
          ></PortLinkButton>
          <PortLinkButton
            type={ButtonTypeProps.PRIMARY}
            link="https://google.com.vn"
            text="Our Story"
            newTab
          ></PortLinkButton>
          <PortLinkButton
            type={ButtonTypeProps.PRIMARY}
            link="https://google.com.vn"
            text="Locations"
            newTab
          ></PortLinkButton>
          <div className="icon-link mt-4 flex items-center justify-center gap-4">
            <PortLinkButton
              type={ButtonTypeProps.PRIMARY}
              link="https://google.com.vn"
              icon="youtube"
              newTab
            ></PortLinkButton>
            <PortLinkButton
              type={ButtonTypeProps.PRIMARY}
              link="https://google.com.vn"
              icon="instagram"
              newTab
            ></PortLinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleComponent;
